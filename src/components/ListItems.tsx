import {StyleSheet, Text, View} from 'react-native';
import {getIcon} from '../modules/Home/Home';
const ListItems: React.FC<{item: any; theme: any}> = ({item, theme}) => {
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.row}>
        <View style={styles.itemRow}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              backgroundColor: theme.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {getIcon(item.title, 'white')}
          </View>
          <View>
            <Text style={{color: theme.colors.surface, fontWeight: '600'}}>
              {item.title}
            </Text>
            <Text style={{color: theme.colors.textSecondary, fontSize: 12}}>
              {item.date}
            </Text>
          </View>
        </View>
        <View style={styles.amountRow}>
          <Text style={[styles.amountText, {color: theme.colors.surface}]}>
            {item.amount}
          </Text>
          <Text
            style={[styles.methodText, {color: theme.colors.textSecondary}]}>
            {item.method}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ListItems;
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    // padding: 16,
    marginBottom: 12,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amountRow: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontWeight: '600',
  },
  methodText: {
    fontSize: 12,
  },
});
