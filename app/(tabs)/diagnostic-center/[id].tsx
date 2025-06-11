import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Star, MapPin, Clock, Shield, Phone, TestTube, CircleCheck as CheckCircle, Calendar, Users } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function DiagnosticCenterDetailScreen() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();

  // Mock data - in real app, fetch based on id
  const diagnosticCenter = {
    id: 1,
    name: 'MediCare Diagnostics',
    address: 'Gomti Nagar, Lucknow',
    distance: '2.5 km',
    rating: 4.8,
    reviews: 342,
    openTime: '7:00 AM - 9:00 PM',
    phone: '+91 98765 43210',
    verified: true,
    features: ['Home Collection', 'Online Reports', 'NABL Certified', '24/7 Service'],
    description: 'MediCare Diagnostics is a trusted name in healthcare, offering a wide range of diagnostic tests with advanced technology and a patient-centric approach. Our state-of-the-art facility is equipped with the latest diagnostic equipment and staffed by experienced professionals committed to providing accurate and timely results.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableTests: [
      {
        name: 'Complete Blood Count (CBC)',
        price: '₹200',
        description: 'Measures red blood cells, white blood cells, and platelets'
      },
      {
        name: 'Lipid Profile',
        price: '₹400',
        description: 'Measures cholesterol and triglyceride levels'
      },
      {
        name: 'Liver Function Test (LFT)',
        price: '₹500',
        description: 'Evaluates liver health and function'
      },
      {
        name: 'Kidney Function Test (KFT)',
        price: '₹450',
        description: 'Assesses kidney function and health'
      },
      {
        name: 'Thyroid Profile',
        price: '₹600',
        description: 'Measures thyroid hormone levels'
      },
      {
        name: 'Urine Routine & Microscopic',
        price: '₹150',
        description: 'Analyzes urine composition and detects abnormalities'
      }
    ]
  };

  const testCategories = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      parameters: ['Hemoglobin', 'RBC Count', 'WBC Count', 'Platelet Count', 'Hematocrit'],
      price: '₹299',
      originalPrice: '₹450',
      reportTime: '4-6 hours',
      description: 'Comprehensive blood analysis to check overall health status'
    },
    {
      id: 2,
      name: 'Lipid Profile',
      parameters: ['Total Cholesterol', 'LDL', 'HDL', 'Triglycerides', 'VLDL'],
      price: '₹349',
      originalPrice: '₹500',
      reportTime: '6-8 hours',
      description: 'Evaluates cardiovascular risk and cholesterol levels'
    },
    {
      id: 3,
      name: 'Liver Function Test',
      parameters: ['SGPT', 'SGOT', 'Bilirubin', 'Alkaline Phosphatase', 'Protein'],
      price: '₹399',
      originalPrice: '₹600',
      reportTime: '8-12 hours',
      description: 'Assesses liver health and function'
    },
    {
      id: 4,
      name: 'Kidney Function Test',
      parameters: ['Creatinine', 'Urea', 'BUN', 'Uric Acid', 'Electrolytes'],
      price: '₹299',
      originalPrice: '₹450',
      reportTime: '6-8 hours',
      description: 'Evaluates kidney health and function'
    },
    {
      id: 5,
      name: 'Thyroid Profile',
      parameters: ['TSH', 'T3', 'T4', 'Free T3', 'Free T4'],
      price: '₹449',
      originalPrice: '₹650',
      reportTime: '12-24 hours',
      description: 'Comprehensive thyroid function assessment'
    },
    {
      id: 6,
      name: 'Diabetes Profile',
      parameters: ['Fasting Glucose', 'HbA1c', 'Post Meal Glucose', 'Insulin'],
      price: '₹599',
      originalPrice: '₹850',
      reportTime: '4-6 hours',
      description: 'Complete diabetes screening and monitoring'
    }
  ];

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Diagnostic Center</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Center Image */}
        <Image source={{ uri: diagnosticCenter.image }} style={styles.centerImage} />

        {/* Center Info */}
        <View style={styles.centerInfo}>
          <View style={styles.centerHeader}>
            <View style={styles.centerTitleRow}>
              <Text style={styles.centerName}>{diagnosticCenter.name}</Text>
              {diagnosticCenter.verified && (
                <View style={styles.verifiedBadge}>
                  <CheckCircle size={16} color={colors.success} />
                  <Text style={styles.verifiedText}>Verified</Text>
                </View>
              )}
            </View>
            <View style={styles.centerRating}>
              <Star size={16} color={colors.warning} fill={colors.warning} />
              <Text style={styles.ratingText}>{diagnosticCenter.rating}</Text>
              <Text style={styles.reviewsText}>({diagnosticCenter.reviews} reviews)</Text>
            </View>
          </View>

          <View style={styles.centerLocation}>
            <MapPin size={16} color={colors.textSecondary} />
            <Text style={styles.locationText}>{diagnosticCenter.address}</Text>
            <Text style={styles.distanceText}>{diagnosticCenter.distance}</Text>
          </View>

          <Text style={styles.centerDescription}>{diagnosticCenter.description}</Text>

          {/* Center Details */}
          <View style={styles.centerDetails}>
            <View style={styles.detailItem}>
              <Clock size={16} color={colors.textSecondary} />
              <Text style={styles.detailText}>{diagnosticCenter.openTime}</Text>
            </View>
            <View style={styles.detailItem}>
              <Phone size={16} color={colors.textSecondary} />
              <Text style={styles.detailText}>{diagnosticCenter.phone}</Text>
            </View>
          </View>

          {/* Features */}
          <View style={styles.featuresSection}>
            <Text style={styles.featuresTitle}>Features</Text>
            <View style={styles.features}>
              {diagnosticCenter.features.map((feature, index) => (
                <View key={index} style={styles.featureTag}>
                  <CheckCircle size={12} color={colors.success} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Available Tests */}
        <View style={styles.testsSection}>
          <Text style={styles.testsTitle}>Available Tests ({testCategories.length})</Text>
          {testCategories.map((test) => (
            <View key={test.id} style={styles.testCard}>
              <View style={styles.testHeader}>
                <View style={styles.testInfo}>
                  <Text style={styles.testName}>{test.name}</Text>
                  <Text style={styles.testDescription}>{test.description}</Text>
                </View>
                <View style={styles.testPricing}>
                  <Text style={styles.testPrice}>{test.price}</Text>
                  <Text style={styles.testOriginalPrice}>{test.originalPrice}</Text>
                </View>
              </View>

              <View style={styles.testMeta}>
                <View style={styles.testMetaItem}>
                  <TestTube size={12} color={colors.textSecondary} />
                  <Text style={styles.testMetaText}>{test.parameters.length} parameters</Text>
                </View>
                <View style={styles.testMetaItem}>
                  <Clock size={12} color={colors.textSecondary} />
                  <Text style={styles.testMetaText}>{test.reportTime}</Text>
                </View>
              </View>

              <View style={styles.parametersSection}>
                <Text style={styles.parametersTitle}>Parameters Covered:</Text>
                <View style={styles.parameters}>
                  {test.parameters.map((param, index) => (
                    <Text key={index} style={styles.parameterTag}>{param}</Text>
                  ))}
                </View>
              </View>

              <TouchableOpacity style={styles.bookTestButton}>
                <Text style={styles.bookTestText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Price Book CTA */}
        <View style={styles.priceBookSection}>
          <TouchableOpacity style={styles.priceBookButton}>
            <Calendar size={20} color="#FFFFFF" />
            <Text style={styles.priceBookText}>View Complete Price Book</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(colors: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    backButton: {
      marginRight: 16,
    },
    title: {
      flex: 1,
      fontSize: 20,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      textAlign: 'center',
    },
    centerImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    centerInfo: {
      backgroundColor: colors.surface,
      margin: 20,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    centerHeader: {
      marginBottom: 12,
    },
    centerTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    centerName: {
      fontSize: 20,
      color: colors.text,
      fontFamily: 'Inter-Bold',
      flex: 1,
      marginRight: 12,
    },
    verifiedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: `${colors.success}20`,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
    },
    verifiedText: {
      fontSize: 12,
      color: colors.success,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 4,
    },
    centerRating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: 16,
      color: colors.warning,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 6,
    },
    reviewsText: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 4,
    },
    centerLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    locationText: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 6,
      flex: 1,
    },
    distanceText: {
      fontSize: 14,
      color: colors.primary,
      fontFamily: 'Inter-SemiBold',
    },
    centerDescription: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      lineHeight: 20,
      marginBottom: 16,
    },
    centerDetails: {
      marginBottom: 16,
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    detailText: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Inter-Regular',
      marginLeft: 8,
    },
    featuresSection: {
      marginTop: 8,
    },
    featuresTitle: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 12,
    },
    features: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    featureTag: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: `${colors.success}20`,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
    },
    featureText: {
      fontSize: 12,
      color: colors.success,
      fontFamily: 'Inter-Medium',
      marginLeft: 4,
    },
    testsSection: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    testsTitle: {
      fontSize: 20,
      color: colors.text,
      fontFamily: 'Inter-Bold',
      marginBottom: 16,
    },
    testCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    testHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    testInfo: {
      flex: 1,
      marginRight: 16,
    },
    testName: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 4,
    },
    testDescription: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      lineHeight: 16,
    },
    testPricing: {
      alignItems: 'flex-end',
    },
    testPrice: {
      fontSize: 18,
      color: colors.success,
      fontFamily: 'Inter-Bold',
    },
    testOriginalPrice: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      textDecorationLine: 'line-through',
    },
    testMeta: {
      flexDirection: 'row',
      gap: 16,
      marginBottom: 12,
    },
    testMetaItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    testMetaText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 4,
    },
    parametersSection: {
      marginBottom: 16,
    },
    parametersTitle: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 8,
    },
    parameters: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    parameterTag: {
      fontSize: 11,
      color: colors.textSecondary,
      backgroundColor: colors.card,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      fontFamily: 'Inter-Regular',
    },
    bookTestButton: {
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    bookTestText: {
      fontSize: 14,
      color: '#FFFFFF',
      fontFamily: 'Inter-SemiBold',
    },
    priceBookSection: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    priceBookButton: {
      backgroundColor: colors.accent,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      borderRadius: 12,
      gap: 8,
    },
    priceBookText: {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'Inter-SemiBold',
    },
  });
}
