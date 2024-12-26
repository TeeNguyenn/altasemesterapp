import React, { useEffect, useState } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker
import { styles } from './NewNumberForm.style';
import { formatDate, useNewNumberFormLogic } from './NewNumberForm.logic';

const NewNumberForm = () => {
  const [visible, setVisible] = useState(false);
  const {
    customerService,
    setCustomerService,
    customerName,
    setCustomerName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    // handleSubmit,
    handleCancel,
    serviceOptions,
    newNumberData,
    setNewNumberData
  } = useNewNumberFormLogic();
  const handleSubmit = async () => {
    if (!customerService || !customerName || !phoneNumber) {
      //alert('Vui lòng điền đầy đủ các trường bắt buộc!');
      return;
    }
    //alert('Số của bạn đã được tạo!');
    // console.log('Selected Service:', customerService);
    // console.log('Selected user:', customerName);
    // console.log('Selected phone:', phoneNumber);
    // console.log('Selected email:', email);
    try {
      const response = await fetch('https://intern-chat.dev.altasoftware.vn/api/Assignment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerName: customerName, Telephone: phoneNumber, status: 0, deviceCode: 'KIO_06',
          serviceCode: customerService, assignmentDate: (new Date()).toISOString(), expireDate: (new Date()).toISOString()
        }),
      });
      if (response.ok) {
        const data = await response.json();

        // Alert.alert(JSON.stringify(data))
        setNewNumberData(data);
        console.log(data);

        handleCancel();
        setVisible(true);

        // props.isNumberDisplay(true, data);
      } else {
        // message.error('Bạn không được cập nhật thông tin người khác');
      }
    } catch (error) {
      //   message.error('An error occurred while submitting the form.');
    }
    // setVisible(true);
    // Logic gửi dữ liệu đến API hoặc xử lý thêm ở đây
  };





  return (
    <View style={styles.container}>
      <Text style={styles.title}>CẤP SỐ MỚI</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Dịch vụ khách hàng lựa chọn</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={customerService}
            onValueChange={(itemValue) => setCustomerService(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Chọn dịch vụ" value="" />
            {serviceOptions.map((option: any, index) => (
              <Picker.Item label={option.label} value={option.value} key={index} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Tên khách hàng</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>In số</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true} // Makes the background semi-transparent
        visible={visible}
        animationType="slide" // 'slide', 'fade', or 'none'
        onRequestClose={() => setVisible(false)} // Handles Android back button
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View >
              <Text style={{ fontSize: 20, marginBottom: 8 }}>Số được cấp: {newNumberData.code}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 8 }}>Ngày cấp: {formatDate(newNumberData.assignmentDate)}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 8 }}>Dịch vụ: {newNumberData.serviceName}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 8 }}>Khách hàng: {newNumberData.customerName}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewNumberForm;
