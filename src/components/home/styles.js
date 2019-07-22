import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
  padding: 20px 10px;
  height: 100%;
`;

export const CartButton = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.View`
  flex-direction: column;
  padding: 10px;
  margin-right: 5px;
  width: 200px;
  background-color: #fff;
  border-radius: 4px;
  height: 320px;
`;
export const ProductImage = styled.Image`
  background-color: #eee;
  border-radius: 4px;
  width: 150px;
  height: 150px;
`;
export const ProductTitle = styled.Text`
  margin-top: 4px;
  color: #333;
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;
export const ProductAddToCart = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
  align-items: center;
`;

export const ProductAddToCartText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  flex: 1;
  text-align: center;
`;

export const ProductAddToCartAmount = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
  flex-direction: row;
  justify-content: center;
`;
export const ProductAddToCartIcon = styled.View`
  flex-direction: row;
  padding: 0 10px;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
