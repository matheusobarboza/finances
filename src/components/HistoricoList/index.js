import React from 'react';
import { View, Text, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Container, Tipo, IconView, TipoText, ValorText } from './styles';

export default function HistoricoList({ data, deleteItem }) {


  function RenderRight(progress, dragX) {

    const scale = dragX.interpolate({
      inputRange: [-50, 0.5],
      outputRange: [1, 0.1]
    })

    const Style = {
      transform: [
        {
          scale
        }
      ]
    }

    return (
      <View style={{ width: 75, height: 77, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text style={[Style, { color: '#fff', fontWeight: '600' }]}>
          <Icon
            name={'trash'}
            color='#fff'
            size={20} />
        </Animated.Text>
      </View>
    );
  }

  return (
    <Swipeable
      useNativeAnimations overshootRight={false}
      onSwipeableRightOpen={() => deleteItem(data)}
      renderRightActions={RenderRight}
    >
      <Container>
        <Tipo>
          <IconView tipo={data.tipo} >
            <Icon
              name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
              color='#fff'
              size={20} />
            <TipoText>{data.tipo}</TipoText>
          </IconView>
        </Tipo>

        <ValorText>R$ {data.valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1. ')}</ValorText>
      </Container>
    </Swipeable>
  );
}