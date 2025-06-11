import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Search, Filter, TestTube, Clock, Star, MapPin } from 'lucide-react-native';

export default function LabTestsTab() {
  const testCategories = [
    { id: 1, name: 'Complete Blood Count', tests: 15, popular: true },
    { id: 2, name: 'Diabetes Profile', tests: 8, popular: true },
    { id: 3, name: 'Lipid Profile', tests: 6, popular: false },
    { id: 4, name: 'Liver Function', tests: 12, popular: true },
    { id: 5, name: 'Kidney Function', tests: 9, popular: false },
    { id: 6, name: 'Thyroid Profile', tests: 7, popular: true },
    { id: 7, name: 'Cardiac Markers', tests: 11, popular: false },
    { id: 8, name: 'Hormone Panel', tests: 18, popular: false },
  ];

  const featuredPackages = [
    {
      id: 1,
      name: 'Annual Health Checkup',
      tests: 45,
      price: '₹2,499',
      originalPrice: '₹4,500',
      discount: '44%',
      duration: '6-8 hours',
      rating: 4.8,
      description: 'Comprehensive health screening package'
    },
    {
      id: 2,
      name: 'Master Health Checkup',
      tests: 78,
      price: '₹4,999',
      originalPrice: '₹8,500',
      discount: '41%',
      duration: '8-10 hours',
      rating: 4.9,
      description: 'Complete body health assessment'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Lab Tests</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#64748B" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search tests, packages..."
              placeholderTextColor="#64748B"
            />
          </View>
        </View>

        {/* Featured Health Packages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Health Packages</Text>
          {featuredPackages.map((pkg) => (
            <TouchableOpacity key={pkg.id} style={styles.packageCard}>
              <View style={styles.packageHeader}>
                <View style={styles.packageInfo}>
                  <Text style={styles.packageName}>{pkg.name}</Text>
                  <Text style={styles.packageDescription}>{pkg.description}</Text>
                  <View style={styles.packageMeta}>
                    <View style={styles.packageDetail}>
                      <TestTube size={12} color="#64748B" />
                      <Text style={styles.packageDetailText}>{pkg.tests} tests</Text>
                    </View>
                    <View style={styles.packageDetail}>
                      <Clock size={12} color="#64748B" />
                      <Text style={styles.packageDetailText}>{pkg.duration}</Text>
                    </View>
                    <View style={styles.packageDetail}>
                      <Star size={12} color="#F59E0B" fill="#F59E0B" />
                      <Text style={styles.packageDetailText}>{pkg.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{pkg.discount} OFF</Text>
                </View>
              </View>
              <View style={styles.packageFooter}>
                <View style={styles.priceContainer}>
                  <Text style={styles.currentPrice}>{pkg.price}</Text>
                  <Text style={styles.originalPrice}>{pkg.originalPrice}</Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Test Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Test Categories</Text>
          <View style={styles.categoriesGrid}>
            {testCategories.map((category) => (
              <TouchableOpacity 
                key={category.id} 
                style={styles.categoryCard}
                onPress={() => router.push(`/test-category/${category.id}`)}
              >
                {category.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>Popular</Text>
                  </View>
                )}
                <View style={styles.categoryIcon}>
                  <TestTube size={20} color="#3B82F6" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryTests}>{category.tests} tests available</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Book Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Book Your Test</Text>
          <View style={styles.quickBookCard}>
            <View style={styles.quickBookContent}>
              <Text style={styles.quickBookTitle}>Need a specific test?</Text>
              <Text style={styles.quickBookDescription}>
                Can't find what you're looking for? Let us help you find the right test.
              </Text>
              <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpButtonText}>Get Help</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    color: '#F8FAFC',
    fontFamily: 'Inter-Bold',
  },
  filterButton: {
    backgroundColor: '#1E293B',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchBar: {
    backgroundColor: '#1E293B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#F8FAFC',
    fontFamily: 'Inter-Regular',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#F8FAFC',
    fontFamily: 'Inter-SemiBold',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  packageCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  packageInfo: {
    flex: 1,
  },
  packageName: {
    fontSize: 16,
    color: '#F8FAFC',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  packageDescription: {
    fontSize: 12,
    color: '#64748B',
    fontFamily: 'Inter-Regular',
    marginBottom: 8,
  },
  packageMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  packageDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageDetailText: {
    fontSize: 11,
    color: '#64748B',
    fontFamily: 'Inter-Regular',
    marginLeft: 4,
  },
  discountBadge: {
    backgroundColor: '#EF444420',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    height: 24,
  },
  discountText: {
    fontSize: 10,
    color: '#EF4444',
    fontFamily: 'Inter-SemiBold',
  },
  packageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentPrice: {
    fontSize: 18,
    color: '#10B981',
    fontFamily: 'Inter-Bold',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#64748B',
    fontFamily: 'Inter-Regular',
    textDecorationLine: 'line-through',
  },
  bookButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  bookButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    width: '47%',
    borderWidth: 1,
    borderColor: '#334155',
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#F59E0B20',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  popularText: {
    fontSize: 8,
    color: '#F59E0B',
    fontFamily: 'Inter-SemiBold',
  },
  categoryIcon: {
    backgroundColor: '#3B82F620',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#F8FAFC',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  categoryTests: {
    fontSize: 11,
    color: '#64748B',
    fontFamily: 'Inter-Regular',
  },
  quickBookCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  quickBookContent: {
    alignItems: 'center',
  },
  quickBookTitle: {
    fontSize: 16,
    color: '#F8FAFC',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
    textAlign: 'center',
  },
  quickBookDescription: {
    fontSize: 14,
    color: '#64748B',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  helpButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  helpButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
  },
});