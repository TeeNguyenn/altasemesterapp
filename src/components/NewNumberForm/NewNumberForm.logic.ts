import { useEffect, useState } from 'react';

interface INewNumberData {
    code: string;
    assignmentDate: string;
    serviceName: string;
    customerName: string;

}


export const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    // Extract hours, minutes, seconds, day, month, and year
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}


export const useNewNumberFormLogic = () => {
    const [customerService, setCustomerService] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [serviceOptions, setServiceOptions] = useState([]);
    const [newNumberData, setNewNumberData] = useState<INewNumberData>({
        code: '',
        assignmentDate: '',
        serviceName: '',
        customerName: ''
    });


    useEffect(() => {
        const getData = async () => {
            const serviceRes = await fetch("https://intern-chat.dev.altasoftware.vn/api/Service")
            const serviceData = await serviceRes.json();

            setServiceOptions(serviceData.map((item: any) => {
                return (
                    { value: item.serviceCode, label: item.serviceName }
                )
            }))
        }

        getData();

    }, [])


    const handleCancel = () => {
        setCustomerService('');
        setCustomerName('');
        setPhoneNumber('');
        setEmail('');

    };


    return {
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
    };
};
