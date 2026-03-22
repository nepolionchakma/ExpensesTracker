import {
  Bell,
  Calendar,
  Car,
  Ellipsis,
  Heart,
  Plane,
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
}> = ({item, activeOption, setActiveOption, getIcon, theme}) => {
  const isActive = activeOption === item.title;
  return (
    <View style={isActive ? styles.activeShadowWrapper : styles.shadowWrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setActiveOption(item.title)}>
        {isActive ? (
          <LinearGradient
            colors={['#1F65FE', '#00BAFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.activeBtn}>
            <View
              style={{
                width: 32,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderRadius: 10,
              }}>
              {getIcon(item.title, '#ffffff')}
            </View>
            <Text style={styles.activeText}>{item.title}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.inactiveBtn}>
            <View
              style={{
                width: 32,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F3F4F6',
                borderRadius: 10,
              }}>
              {getIcon(item.title, '#374151')}
            </View>
            <Text style={styles.inactiveText}>{item.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export const getIcon = (title: string, color: string) => {
  switch (title) {
    case 'Savings':
      return <Plus size={20} color={color} strokeWidth={2.5} />;
    case 'Reminders':
      return <Bell size={20} color={color} strokeWidth={2.5} />;
    case 'Budget':
      return <Wallet size={20} color={color} strokeWidth={2.5} />;
    case 'Monthly':
      return <Calendar size={20} color={color} strokeWidth={2.5} />;
    case 'Yearly':
      return <Calendar size={20} color={color} strokeWidth={2.5} />;
    case 'All Time':
      return <ShoppingBag size={20} color={color} strokeWidth={2.5} />;
    case 'Food':
      return <Utensils size={20} color={color} />;
    case 'Uber':
      return <Car size={20} color={color} />;
    case 'Shopping':
      return <ShoppingBag size={20} color={color} />;
    case 'Car Fund':
      return <Car size={20} color={color} />;
    case 'Vacation':
      return <Plane size={20} color={color} />;
    case 'Health':
      return <Heart size={20} color={color} />;
    default:
      return null;
  }
};

const OPTION_DATA: Record<string, any[]> = {
  Savings: [
    {
      id: '1',
      title: 'Car Fund',
      date: '20 Feb 2024',
      amount: '+ $500',
      method: 'Bank Transfer',
    },
    {
      id: '2',
      title: 'Vacation',
      date: '13 Mar 2024',
      amount: '+ $200',
      method: 'Credit Card',
    },
  ],
  Reminders: [
    {
      id: '1',
      title: 'Pay Electricity Bill',
      date: '25 Mar 2024',
      amount: '- $150',
      method: 'Pending',
    },
    {
      id: '2',
      title: 'House Rent',
      date: '1 Apr 2024',
      amount: '- $1200',
      method: 'Pending',
    },
  ],
  Budget: [
    {
      id: '1',
      title: 'Groceries',
      date: 'Mar 2024',
      amount: '$300 / $400',
      method: 'Budgeted',
    },
    {
      id: '2',
      title: 'Entertainment',
      date: 'Mar 2024',
      amount: '$50 / $100',
      method: 'Budgeted',
    },
  ],
  Monthly: [
    {
      id: '1',
      title: 'Food',
      date: '20 Feb 2024',
      amount: '- $20',
      method: 'Google Pay',
    },
    {
      id: '2',
      title: 'Uber',
      date: '13 Mar 2024',
      amount: '- $18',
      method: 'Cash',
    },
    {
      id: '3',
      title: 'Shopping',
      date: '11 Mar 2024',
      amount: '- $400',
      method: 'Paytm',
    },
  ],
  Yearly: [
    {
      id: '1',
      title: 'Tax Return',
      date: 'Apr 2023',
      amount: '+ $1200',
      method: 'Government',
    },
  ],
  'All Time': [
    {
      id: '1',
      title: 'Total Savings',
      date: 'Since 2020',
      amount: '+ $45000',
      method: 'Multiple',
    },
  ],
};

const HomeScreen = () => {
  const theme = useTheme();
  const drawerNav = useNavigation<any>();
  const [activeOption, setActiveOption] = useState<string>('Savings');
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const layoutWidth = event.nativeEvent.layoutMeasurement.width;

    // Total scrollable {area}
    const maxScroll = contentWidth - layoutWidth;
    if (maxScroll <= 0) {
      return;
    }

    // Determine progress from 0 to 1
    const progress = Math.max(0, Math.min(1, scrollPosition / maxScroll));
    // Provide 0, 1, or 2 based on the progress for 3 dots
    const calculatedIndex = Math.round(progress * 2);

    if (calculatedIndex !== activeDotIndex) {
      setActiveDotIndex(calculatedIndex);
    }
  };

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
              {id: 5, title: 'Yearly'},
              {id: 6, title: 'All Time'},
            ]}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingVertical: 30,
              gap: 10,
            }}
            showHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
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
            {[0, 1, 2].map(i => (
              <View
                key={i}
                style={[styles.dot, activeDotIndex === i && styles.activeDot]}
              />
            ))}
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
              data={OPTION_DATA[activeOption] || []}
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
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  activeShadowWrapper: {
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#1F65FE',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  activeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 12,
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  inactiveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#fff',
    gap: 12,
  },
  inactiveText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 16,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 8,
  },
  dot: {
    width: 16,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E5E7EB',
  },
  activeDot: {
    backgroundColor: '#1F65FE',
    width: 24,
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
