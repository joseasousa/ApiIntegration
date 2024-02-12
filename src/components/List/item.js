import React from 'react';

import { Button, Text, View } from 'react-native';
import { deleteFut } from '../../service';
import { styles } from './style';

function Item({ data, delItem }) {
  const delFut = async () => {
    try {
      await deleteFut(data.id);

      delItem(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{`${data?.local} - ${data?.endereco}`}</Text>
      <Button onPress={delFut} title="Del" color="#841584" />
    </View>
  );
}

Item.propTypes = {
  data: PropTypes.object,
  delItem: PropTypes.func,
};

Item.defaultProps = {
  data: {},
  delItem: () => {},
};

export default Item;
