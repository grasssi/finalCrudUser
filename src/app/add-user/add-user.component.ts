import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  nom: string = '';
  prenom: string = '';
  pwd: string = '';
  email: string = '';
  phone: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  adduser() {
    console.log('Holaa');
    //creation d'objet
    const currentUser = {

      nom: this.nom,
      prenom: this.prenom,
      pwd: this.pwd,
      email: this.email,
      phone: this.phone
    }
    //Creation du Tab qui contient tous les objets
    const users=JSON.parse(localStorage.getItem('registration')|| '[]')
    users.push(currentUser)
    //Convert a JavaScript object into a string with JSON.stringify().
    localStorage.setItem('registration', JSON.stringify(users));
    console.log('users=',users)
  }
}
