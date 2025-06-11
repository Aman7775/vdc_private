import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Star, MapPin, Clock, Video, Phone, Calendar, Award, CircleCheck as CheckCircle, Users, MessageCircle } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function DoctorDetailScreen() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  
  // Mock data - in real app, fetch based on id
  const doctor = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '12 years',
    rating: 4.9,
    reviews: 256,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    languages: ['English', 'Hindi'],
    verified: true,
    qualifications: ['MBBS', 'MD Cardiology', 'Fellowship in Interventional Cardiology'],
    hospital: 'Apollo Hospital',
    location: 'Bandra, Mumbai',
    registrationId: 'MH12345',
    bio: 'Dr. Sarah Johnson is a renowned cardiologist with over 12 years of experience in treating cardiovascular diseases. She specializes in interventional cardiology and has performed over 2000 successful procedures.',
    awards: ['Best Cardiologist 2023', 'Excellence in Patient Care 2022'],
    consultationTypes: [
      { type: 'Video Consultation', fee: 800, duration: '30 mins', available: true },
      { type: 'Audio Consultation', fee: 600, duration: '20 mins', available: true },
      { type: 'In-Clinic Visit', fee: 1000, duration: '45 mins', available: true },
      { type: 'Home Visit', fee: 1500, duration: '60 mins', available: false }
    ],
    conditions: [
      'Heart Disease', 'Hypertension', 'Arrhythmia', 'Chest Pain', 
      'Heart Attack', 'Coronary Artery Disease', 'Heart Failure'
    ],
    timeSlots: {
      today: ['3:00 PM', '4:30 PM', '6:00 PM'],
      tomorrow: ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'],
      dayAfter: ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '4:00 PM']
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent doctor! Very thorough examination and clear explanation of the condition.',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Dr. Johnson is very professional and caring. Highly recommended for heart problems.',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Amit Patel',
      rating: 4,
      comment: 'Good consultation. The doctor listened to all my concerns patiently.',
      date: '2 weeks ago'
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
        <Text style={styles.title}>Doctor Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Doctor Profile */}
        <View style={styles.doctorProfile}>
          <View style={styles.doctorImageContainer}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            {doctor.verified && (
              <View style={styles.verifiedBadge}>
                <CheckCircle size={16} color={colors.success} />
              </View>
            )}
          </View>

          <View style={styles.doctorInfo}>
            <View style={styles.doctorHeader}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              {doctor.awards.length > 0 && (
                <Award size={18} color={colors.warning} />
              )}
            </View>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <Text style={styles.doctorExperience}>{doctor.experience} experience</Text>
            
            <View style={styles.doctorLocation}>
              <MapPin size={14} color={colors.textSecondary} />
              <Text style={styles.locationText}>{doctor.hospital}, {doctor.location}</Text>
            </View>

            <View style={styles.doctorRating}>
              <Star size={16} color={colors.warning} fill={colors.warning} />
              <Text style={styles.ratingText}>{doctor.rating}</Text>
              <Text style={styles.reviewsText}>({doctor.reviews} reviews)</Text>
              <Text style={styles.registrationId}>Reg: {doctor.registrationId}</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{doctor.bio}</Text>
          </View>
        </View>

        {/* Qualifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Qualifications</Text>
          <View style={styles.qualificationsCard}>
            {doctor.qualifications.map((qualification, index) => (
              <View key={index} style={styles.qualificationItem}>
                <CheckCircle size={14} color={colors.success} />
                <Text style={styles.qualificationText}>{qualification}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Awards */}
        {doctor.awards.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Awards & Recognition</Text>
            <View style={styles.awardsCard}>
              {doctor.awards.map((award, index) => (
                <View key={index} style={styles.awardItem}>
                  <Award size={14} color={colors.warning} />
                  <Text style={styles.awardText}>{award}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Common Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conditions Treated</Text>
          <View style={styles.conditionsCard}>
            <View style={styles.conditions}>
              {doctor.conditions.map((condition, index) => (
                <Text key={index} style={styles.conditionTag}>{condition}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages Spoken</Text>
          <View style={styles.languagesCard}>
            <View style={styles.languages}>
              {doctor.languages.map((language, index) => (
                <Text key={index} style={styles.languageTag}>{language}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* Consultation Types */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Options</Text>
          {doctor.consultationTypes.map((consultation, index) => (
            <View key={index} style={[
              styles.consultationCard,
              !consultation.available && styles.consultationCardDisabled
            ]}>
              <View style={styles.consultationHeader}>
                <View style={styles.consultationInfo}>
                  <View style={styles.consultationTitleRow}>
                    {consultation.type === 'Video Consultation' && <Video size={16} color={colors.primary} />}
                    {consultation.type === 'Audio Consultation' && <Phone size={16} color={colors.success} />}
                    {consultation.type === 'In-Clinic Visit' && <MapPin size={16} color={colors.warning} />}
                    {consultation.type === 'Home Visit' && <Users size={16} color={colors.info} />}
                    <Text style={styles.consultationType}>{consultation.type}</Text>
                  </View>
                  <Text style={styles.consultationDuration}>{consultation.duration}</Text>
                </View>
                <View style={styles.consultationPricing}>
                  <Text style={styles.consultationFee}>₹{consultation.fee}</Text>
                  {!consultation.available && (
                    <Text style={styles.unavailableText}>Not Available</Text>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Time Slots */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time Slots</Text>
          <View style={styles.timeSlotsCard}>
            <View style={styles.daySlots}>
              <Text style={styles.dayTitle}>Today</Text>
              <View style={styles.slots}>
                {doctor.timeSlots.today.map((slot, index) => (
                  <TouchableOpacity key={index} style={styles.timeSlot}>
                    <Text style={styles.timeSlotText}>{slot}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.daySlots}>
              <Text style={styles.dayTitle}>Tomorrow</Text>
              <View style={styles.slots}>
                {doctor.timeSlots.tomorrow.map((slot, index) => (
                  <TouchableOpacity key={index} style={styles.timeSlot}>
                    <Text style={styles.timeSlotText}>{slot}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Reviews */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Patient Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>View All</Text>
            </TouchableOpacity>
          </View>
          {reviews.slice(0, 3).map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <View style={styles.reviewRating}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} color={colors.warning} fill={colors.warning} />
                  ))}
                </View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
          ))}
        </View>

        {/* Book Consultation Button */}
        <View style={styles.bookingSection}>
          <TouchableOpacity style={styles.bookConsultationButton}>
            <Calendar size={20} color="#FFFFFF" />
            <Text style={styles.bookConsultationText}>Book Consultation</Text>
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
    doctorProfile: {
      backgroundColor: colors.surface,
      margin: 20,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
      flexDirection: 'row',
    },
    doctorImageContainer: {
      position: 'relative',
      marginRight: 16,
    },
    doctorImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    verifiedBadge: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: 2,
    },
    doctorInfo: {
      flex: 1,
    },
    doctorHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    doctorName: {
      fontSize: 18,
      color: colors.text,
      fontFamily: 'Inter-Bold',
      flex: 1,
      marginRight: 8,
    },
    doctorSpecialty: {
      fontSize: 16,
      color: colors.primary,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 4,
    },
    doctorExperience: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginBottom: 8,
    },
    doctorLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    locationText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 4,
    },
    doctorRating: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    ratingText: {
      fontSize: 14,
      color: colors.warning,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 4,
    },
    reviewsText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 4,
    },
    registrationId: {
      fontSize: 10,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      marginLeft: 8,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.text,
      fontFamily: 'Inter-Bold',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    seeAll: {
      fontSize: 14,
      color: colors.primary,
      fontFamily: 'Inter-Medium',
    },
    bioCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    bioText: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      lineHeight: 20,
    },
    qualificationsCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    qualificationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    qualificationText: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Inter-Regular',
      marginLeft: 8,
    },
    awardsCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    awardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    awardText: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Inter-Regular',
      marginLeft: 8,
    },
    conditionsCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    conditions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    conditionTag: {
      fontSize: 12,
      color: colors.textSecondary,
      backgroundColor: colors.card,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      fontFamily: 'Inter-Regular',
    },
    languagesCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    languages: {
      flexDirection: 'row',
      gap: 8,
    },
    languageTag: {
      fontSize: 12,
      color: colors.primary,
      backgroundColor: `${colors.primary}20`,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      fontFamily: 'Inter-Medium',
    },
    consultationCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      marginBottom: 8,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    consultationCardDisabled: {
      opacity: 0.6,
    },
    consultationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    consultationInfo: {
      flex: 1,
    },
    consultationTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    consultationType: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 8,
    },
    consultationDuration: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
    },
    consultationPricing: {
      alignItems: 'flex-end',
    },
    consultationFee: {
      fontSize: 18,
      color: colors.success,
      fontFamily: 'Inter-Bold',
    },
    unavailableText: {
      fontSize: 10,
      color: colors.error,
      fontFamily: 'Inter-Medium',
    },
    timeSlotsCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    daySlots: {
      marginBottom: 16,
    },
    dayTitle: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 8,
    },
    slots: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    timeSlot: {
      backgroundColor: colors.card,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    timeSlotText: {
      fontSize: 12,
      color: colors.text,
      fontFamily: 'Inter-Medium',
    },
    reviewCard: {
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      marginBottom: 8,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    reviewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    reviewerName: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Inter-SemiBold',
    },
    reviewRating: {
      flexDirection: 'row',
      gap: 2,
    },
    reviewComment: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
      lineHeight: 18,
      marginBottom: 8,
    },
    reviewDate: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: 'Inter-Regular',
    },
    bookingSection: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    bookConsultationButton: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      borderRadius: 12,
      gap: 8,
    },
    bookConsultationText: {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'Inter-SemiBold',
    },
  });
}
