import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
  backgroundColor: #414141
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  margin-bottom: 15px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeHolderTextColor: 'rgba(255,255,255,0.20)'
})`
  background: rgba(0,0,0,0.20);
  width: 90%;
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 9px;
`;
export const LinkText = styled.Text`
  color: #fff;
`;