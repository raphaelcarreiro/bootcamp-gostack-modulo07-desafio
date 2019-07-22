import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  CartButton,
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddToCart,
  ProductAddToCartText,
  ProductAddToCartIcon,
  ProductAddToCartAmount,
} from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    api
      .get('products')
      .then(response => {
        if (response.status === 200) {
          const products = response.data.map(product => {
            return {
              ...product,
              formattedPrice: formatPrice(product.price),
            };
          });
          this.setState({
            products,
          });
        }
      })
      .catch(err => {
        console.tron.log(err.message);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleAddToCart = product => {
    const { addToCartRequest } = this.props;
    addToCartRequest(product.id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        {loading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <FlatList
            horizontal
            keyExtractor={product => String(product.id)}
            data={products}
            renderItem={({ item }) => (
              <Product>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.formattedPrice}</ProductPrice>
                <ProductAddToCart onPress={() => this.handleAddToCart(item)}>
                  <ProductAddToCartIcon>
                    <Icon name="add-shopping-cart" size={20} color="#fff" />
                    <ProductAddToCartAmount>
                      {amount[item.id] || 0}
                    </ProductAddToCartAmount>
                  </ProductAddToCartIcon>
                  <ProductAddToCartText>Adicionar</ProductAddToCartText>
                </ProductAddToCart>
              </Product>
            )}
          />
        )}
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
};

Home.navigationOptions = ({ navigation }) => ({
  title: 'R O C K E T S H O E S',
  headerRight: (
    <CartButton onPress={() => navigation.navigate('Cart')}>
      <Icon name="shopping-basket" size={20} color="#fff" />
    </CartButton>
  ),
});

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
