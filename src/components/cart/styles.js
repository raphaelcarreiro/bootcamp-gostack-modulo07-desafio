import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  padding: 20px;
  height: 100%;
`;

export const CartContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
`;

export const Product = styled.View`
  flex-direction: column;
`;

export const ProductData = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  padding: 5px;
`;

export const ProductName = styled.Text`
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const ProductIconDelete = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const ProductAmount = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 0;
`;

export const ProductAmountInfo = styled.TextInput`
  background-color: #fff;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 40px;
  width: 60px;
`;

export const ProductAmountControl = styled.View`
  flex-direction: row;
  padding: 5px;
`;
export const ProductAmountButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const ProductTotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Total = styled.View`
  margin-top: 20px;
`;

export const TotalText = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  color: #999;
  text-align: center;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const ProceedToCheckout = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
  margin-top: 30px;
`;

export const OrderText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const EmptyCart = styled.View`
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
`;
