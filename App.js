import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textPhrase: 'Siga os bons e aprenda com eles.',
      img: require('./src/assets/images/biscoito.png')
    }
    this.phrases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
    this.openCookie = this.openCookie.bind(this)
  }

  openCookie() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length)
    this.setState({
      textPhrase: `"${this.phrases[randomNumber]}"`,
      img: require('./src/assets/images/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img} />
        <Text style={styles.textPhrase}>{this.state.textPhrase}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.openCookie}
        >
          <SafeAreaView style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar o biscoito</Text>
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textPhrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;