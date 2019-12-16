import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';


export default class Contact extends Component {
    render() {
        return(
          <ScrollView>

        <Card title='Contact Information'>
      <Text style={{marginBottom: 10}}>
        121, Clear Water Bay Road
        Clear Water Bay, Kowloon
        HONG KONG
        Tel: +852 1234 5678
        Fax: +852 8765 4321
        Email:confusion@food.net
      </Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>
    </ScrollView>
);


}
}