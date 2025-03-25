import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function AuPairLisaDetailScreen() {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Text 
        key={index} 
        style={[styles.starSymbol, index < rating ? styles.filledStar : styles.emptyStar]}
      >
        ★
      </Text>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.locationContainer}>
          <Image source={require('../../assets/mapa.jpg')} style={styles.locationImage} />
          <Text style={styles.locationText}>San Diego, CA</Text>
        </View>

        <Text style={styles.titleText}>MEET AU PAIR LISA</Text>

        <View style={styles.imageContainer}>
          <View style={styles.placeholderImage}>
            <Text style={styles.crossText}>✕</Text>
          </View>
        </View>

        <View style={styles.testimonialContainer}>
          <Text style={styles.testimonialQuote}>
            "I love to do arts & crafts with the kids where you enjoy going onto adventure."
          </Text>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewsTitle}>Lisa's Reviews</Text>
          <View style={styles.starContainer}>
            {renderStars(5)}
            <Text style={styles.reviewCount}>75</Text>
          </View>
        </View>

        <View style={styles.pricingContainer}>
          <TouchableOpacity>
            <Text style={styles.priceText}>$99/night</Text> 
            <Text style={styles.starContainer}>{renderStars(5)}</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.availabilityButton}>
            <Text style={styles.availabilityButtonText}>CHECK AVAILABILITY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 16,  // Espacio adicional al final del contenido
  },
  locationContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  locationText: {
    color: '#666',
    fontSize: 14,
    marginTop: 8,
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageContainer: {
    aspectRatio: 1,
    width: '100%',
    marginBottom: 16,
  },
  placeholderImage: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossText: {
    fontSize: 100,
    color: '#999',
  },
  testimonialContainer: {
    marginBottom: 16,
  },
  testimonialQuote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
  },
  reviewContainer: {
    marginBottom: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starSymbol: {
    fontSize: 20,
  },
  filledStar: {
    color: 'gold',
  },
  emptyStar: {
    color: '#ddd',
  },
  reviewCount: {
    marginLeft: 8,
    color: '#666',
  },
  pricingContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    padding: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  availabilityButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  availabilityButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
