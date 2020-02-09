import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;

  lettersecildimi = false;
  numbersecildimi = false;
  symbolsecildimi = false;
  password = "";


  onChangeLength(value: string) {
    const parsedeger = parseInt(value);

    if (!isNaN(parsedeger)) {
      this.length = parsedeger;
    }
  }

  onLetterSelect() {
    return this.lettersecildimi = !this.lettersecildimi
  }



  butonaTikla() {

    const numbers = "1234567890";
    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const symbols = "é!'^+%&/()="

    let gecerliDeger = '';
    if (this.numbersecildimi) {

      gecerliDeger += numbers;


    }
    if (this.lettersecildimi) {
      gecerliDeger += letters;
    }
    if (this.symbolsecildimi) {
      gecerliDeger += symbols;
    }
    let generatePassword = '';

    for (let i = 0; i < this.length; i++) {
      const element = Math.floor(Math.random() * gecerliDeger.length);

      generatePassword += gecerliDeger[element];

      this.password = generatePassword;

    }


  }

  numberOn() {

    return this.numbersecildimi = !this.numbersecildimi
  }

  symbolOn() {

    return this.symbolsecildimi = !this.symbolsecildimi
  }

}
