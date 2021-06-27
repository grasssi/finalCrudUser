import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  list = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(i:any){
    //The splice() method adds/removes items to/from an array, and returns the removed item(s)
    this.list.splice(i,1);
    //sauvgarder la maodification dans le tableau
    localStorage.setItem('registration',JSON.stringify(this.list))
  }
}
