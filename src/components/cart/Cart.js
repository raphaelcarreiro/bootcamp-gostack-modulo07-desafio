import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Product,
  ProductData,
  ProductImage,
  ProductName,
  ProductIconDelete,
  ProductAmount,
  ProductAmountControl,
  ProductAmountButton,
  ProductInfo,
  ProductPrice,
  ProductAmountInfo,
  CartContainer,
  ProductTotal,
  Total,
  TotalText,
  TotalValue,
  ProceedToCheckout,
  OrderText,
  EmptyCart,
  EmptyCartText,
} from './styles';

function Cart(props) {
  const { cart, total, removeFromCart, updateAmountRequest } = props;

  function handleRemoveFromCart(id) {
    removeFromCart(id);
  }

  function handleIncreaseAmount(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function handleDecreaseAmount(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <CartContainer>
          {cart.map(item => (
            <Product key={String(item.id)}>
              <ProductData>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfo>
                  <ProductName>{item.title}</ProductName>
                  <ProductPrice>{item.formattedPrice}</ProductPrice>
                </ProductInfo>
                <ProductIconDelete
                  onPress={() => handleRemoveFromCart(item.id)}
                >
                  <Icon name="delete" size={20} color="#7159c1" />
                </ProductIconDelete>
              </ProductData>
              <ProductAmount>
                <ProductAmountControl>
                  <ProductAmountButton
                    onPress={() => handleDecreaseAmount(item)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductAmountButton>
                  <ProductAmountInfo>{item.amount}</ProductAmountInfo>
                  <ProductAmountButton
                    onPress={() => handleIncreaseAmount(item)}
                  >
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductAmountButton>
                </ProductAmountControl>
                <ProductTotal>{item.subtotal}</ProductTotal>
              </ProductAmount>
            </Product>
          ))}
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{total}</TotalValue>
            <ProceedToCheckout>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </ProceedToCheckout>
          </Total>
        </CartContainer>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Carrinho',
};

Cart.propTypes = {
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
