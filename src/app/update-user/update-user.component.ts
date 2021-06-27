import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  users=JSON.parse(localStorage.getItem('registration')|| '[]');
  nom: string = '';
  prenom: string = '';
  pwd: string = '';
  email: string = '';
  phone: string = '';
  index:any;

  constructor(private activatetRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //recuper et afficher les informations a modifier
    this.index=this.activatetRoute.snapshot.params.index;
    this.nom=this.users[this.index].nom;
    this.prenom=this.users[this.index].prenom;
    this.email=this.users[this.index].email;
    this.phone=this.users[this.index].phone;
    this.pwd=this.users[this.index].pwd;
  }
  updateUser(){
    //creation de Nouveau User dans un object
    const updatetUser = {
      nom: this.nom,
      prenom:this.prenom,
      pwd: this.pwd,
      email: this.email,
      phone:this.phone
        }
        //remplacer len nouveau object avec lancien objet
        this.users.splice(this.index,1,updatetUser);
        //mise a jour de localStorage
        localStorage.setItem('registration', JSON.stringify(this.users))
        //apres lupdate naviger vers le component listUser
        this.router.navigate(['/listUser'])
  }
}
