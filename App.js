import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  // state last count value .
  const [count, setCount] = useState(null);
// state add by input price .
  const [inp, setInp] = useState();
//text msg add or sub .
  const [Msg, setMsg] = useState('');
// on price add .
  let onChangeText = (e) => {
    setInp(e);
  };
// on press add vat btn .
  let onAdd = () => {
    if (count >= 0||count==undefined||count==null||count==="") {
      setCount(null);
      setMsg(' ');

    }
    let val = (Math.max(inp * 1.15)).toFixed(1);
    setCount(val);

    // Alert.alert(count);
    setMsg(' المبلغ مع الضريبة 15%');
  }

  let onSub = () => {
    if (count >= 0||count==undefined||count==null||count==="") {
      setCount(null);
      setMsg('');
    }
    let val = (Math.max(inp / 1.15)).toFixed(1);
    setCount(val);

    // Alert.alert(count);
    setMsg('المبلغ بدون الضريبة ');
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}><Text style={styles.textHeader}>حساب ضريبة القيمة المضافة 15% </Text></View>
      <View style={styles.containeItems}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 15, }}>ادخل السعر </Text>
        <TextInput
          style={styles.inpt1}
          onChangeText={text => onChangeText(text)}
          placeholder="      ادخل السعر"
          maxLength={20}
          keyboardType='numeric'
          value={null}
        />
        <TextInput
          style={styles.inpt2}
          onChangeText={text => onChangeText(text)}
          placeholder="     النتيجة"
          keyboardType='numeric'
          value={count}
        />
<Text style={{  fontSize: 18, fontWeight: 'bold', paddingTop: 15,color:'green' }}>{Msg}</Text>
        <View style={styles.containerBtn}>
          <Button
            color="#ff4500"

            title="قبل ضريبة "
            onPress={() => onSub()}
          />
          <Button
            color="#00ff00"
            title="اضافة ضريبة "
            onPress={() => onAdd()}

          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 80,
    marginTop: 0,
    padding: 10,
    paddingHorizontal: 45,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'green',
    borderRadius: 5,

  },
  textHeader: {
    color: '#fff',
  },
  containeItems: {
    width: 350,
    height: 350,
    borderRadius: 20,
    borderColor: 'silver',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpt1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 270
  },
  inpt2: {
    height: 40,
    borderColor: 'gray',
    marginTop: 20,
    width: 270,
    fontSize: 26,
    marginTop: 40,
    paddingLeft: 90,
    color: 'red',
  },
  containerBtn: {

    flexDirection: "row",
    marginBottom: 0,
    marginTop: 80,
  },

});
