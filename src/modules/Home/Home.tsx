import {
  Bell,
  Calendar,
  Car,
  Ellipsis,
  Plus,
  ShoppingBag,
  UserCircle,
  Utensils,
  Wallet,
} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import CustomContainer from '../../components/CustomContainer';
import CustomFlatList from '../../components/CustomFlatList';
import LinearGradient from 'react-native-linear-gradient';
import ListItems from '../../components/ListItems';

interface FinancialCardProps {
  item: {
    id: number;
    title: string;
    amount: number;
  };
  theme: any;
}

const FinancialCard: React.FC<FinancialCardProps> = ({item, theme}) => (
  <View
    style={[
      styles.card,
      styles.shadowWrapper,
      {
        backgroundColor: theme.colors.background,
      },
    ]}>
    <View style={[styles.cardContent]}>
      <Wallet size={20} color="gray" />
      <Text style={[styles.headerText, {color: theme.colors.surface}]}>
        {item.title}
      </Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={[styles.amountText, {color: theme.colors.surface}]}>
        ${item.amount}
      </Text>
    </View>
  </View>
);

const OptionCard: React.FC<{
  item: any;
  activeOption: string;
  setActiveOption: (title: string) => void;
  getIcon: (title: string, color: string) => React.ReactNode;
  theme: any;
}> = ({item, activeOption, setActiveOption, getIcon, theme}) => (
  <View style={styles.shadowWrapper}>
    <TouchableOpacity onPress={() => setActiveOption(item.title)}>
      {activeOption === item.title ? (
        <LinearGradient
          colors={['#2563EB', '#06B6D4']}
          style={styles.activeBtn}>
          <View
            style={{
              padding: 5,
              backgroundColor: theme.colors.onBackground,
              borderRadius: 30,
            }}>
            {getIcon(item.title, 'gray')}
          </View>
          <Text style={[styles.activeText]}>{item.title}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.inactiveBtn}>
          <View
            style={{
              padding: 5,
              backgroundColor: theme.colors.onBackground,
              borderRadius: 30,
            }}>
            {getIcon(item.title, 'gray')}
          </View>
          <Text style={[styles.activeText, {color: theme.colors.surface}]}>
            {item.title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

export const getIcon = (title: string, color: string) => {
  switch (title) {
    case 'Savings':
      return <Plus size={20} color={color} />;
    case 'Reminders':
      return <Bell size={20} color={color} />;
    case 'Budget':
      return <Wallet size={20} color={color} />;
    case 'Monthly':
      return <Calendar size={20} color={color} />;
    case 'Food':
      return <Utensils size={20} color={color} />;
    case 'Uber':
      return <Car size={20} color={color} />;
    case 'Shopping':
      return <ShoppingBag size={20} color={color} />;
    default:
      return null;
  }
};

const DATA = [
  {
    id: '1',
    title: 'Food',
    date: '20 Feb 2024',
    amount: '+ $20 + Vat 0.5%',
    method: 'Google Pay',
  },
  {
    id: '2',
    title: 'Uber',
    date: '13 Mar 2024',
    amount: '- $18 + Vat 0.8%',
    method: 'Cash',
  },
  {
    id: '3',
    title: 'Shopping',
    date: '11 Mar 2024',
    amount: '- $400 + Vat 0.12%',
    method: 'Paytm',
  },
];

const HomeScreen = () => {
  const theme = useTheme();
  const drawerNav = useNavigation<any>();
  const [activeOption, setActiveOption] = useState<string>('Savings');

  return (
    <CustomContainer>
      <View style={styles.header}>
        <Text style={styles.headerText}>Overview</Text>
        <TouchableOpacity
          onPress={drawerNav.toggleDrawer}
          style={styles.drawerIcon}>
          <UserCircle size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <CustomFlatList
          horizontal
          data={[
            {id: 1, title: 'Total Salary', amount: 1000},
            {id: 2, title: 'Total Expenses', amount: 500},
            {id: 3, title: 'Total Savings', amount: 500},
            {id: 4, title: 'Monthly', amount: 500},
          ]}
          contentContainerStyle={[
            styles.contentContainer,
            {
              backgroundColor: theme.colors.onBackground,
            },
          ]}
          showHorizontalScrollIndicator={false}
          RenderItems={({item}: {item: any}) => (
            <FinancialCard item={item} theme={theme} />
          )}
        />
        <View
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <CustomFlatList
            horizontal
            data={[
              {id: 1, title: 'Savings'},
              {id: 2, title: 'Reminders'},
              {id: 3, title: 'Budget'},
              {id: 4, title: 'Monthly'},
            ]}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingVertical: 30,
              gap: 10,
            }}
            showHorizontalScrollIndicator={false}
            RenderItems={({item}: {item: any}) => (
              <OptionCard
                item={item}
                activeOption={activeOption}
                setActiveOption={setActiveOption}
                getIcon={getIcon}
                theme={theme}
              />
            )}
          />

          {/* Dots */}
          <View style={styles.dots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Latest Entries Header */}
        <View style={{padding: 10}}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Latest Entries</Text>
            <TouchableOpacity style={styles.menuBtn}>
              <Ellipsis size={24} color={theme.colors.onSurface} />
            </TouchableOpacity>
          </View>
          <View>
            <CustomFlatList
              data={DATA}
              horizontal={false}
              showVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentList}
              showHorizontalScrollIndicator={false}
              RenderItems={({item}: {item: any}) => (
                <ListItems item={item} theme={theme} />
              )}
            />
          </View>
        </View>
      </View>
    </CustomContainer>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerIcon: {
    // position: 'absolute',
    // top: 10,
    // left: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    gap: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowWrapper: {
    borderRadius: 20,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  activeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#fff',
    gap: 8,
  },
  inactiveText: {
    color: '#374151',
    fontWeight: '500',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#3B82F6',
    width: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  menuBtn: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  contentList: {
    padding: 10,
    gap: 10,
  },
});
