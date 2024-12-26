import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './Demo2.style';

const Demo2 = () => {
  
  return (
    <ScrollView style={styles.home}>
            <View style={styles.header}>
            <View>
               <View style={styles.navList}>
                            <Text style={styles.navItem}>Home</Text>
                            <Text style={styles.navItem}>Page</Text>
                            <Text style={styles.navItem}>Shop</Text>
                            <Text style={styles.navItem}>Blog</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower1.jpg")} alt=""/>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower2.jpg")} alt=""/>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower3.jpg")} alt=""/>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower2.jpg")} alt=""/>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower1.jpg")} alt=""/>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower3.jpg")} alt=""/>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower2.jpg")} alt=""/>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower3.jpg")} alt=""/>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower1.jpg")} alt=""/>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require("../../assets/images/flower2.jpg")} alt=""/>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerWrapper}>
                    <Text style={styles.title}>Customer Service</Text>
                    <View style={styles.footerList}>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Help & Contact Us</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Returns & Refunds</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Online Stores</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Terms & Conditions</Text></View>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <Text style={styles.title}>Company</Text>
                    <View style={styles.footerList}>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>About Us</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Blog</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Order Tracking</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>FAQ</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Contact Us
                        </Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Login</Text></View>
                    </View>
                </View>
                
                <View style={styles.footerWrapper}>
                    <Text style={styles.title}>Social Media</Text>
                    <View style={styles.footerList}>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Twitter</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Instagram</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Tumblr</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Pinterest</Text></View>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <Text style={styles.title}>Archive</Text>
                    <View style={styles.footerList}>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Designer Shoes</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Gallery</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Pricing</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Feature Index</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Login</Text></View>
                        <View style={styles.footerItem}><Text style={styles.footerLink}>Help & Support</Text></View>
                    </View>
                </View>
            </View>
        </ScrollView>
  );
};

export default Demo2;
