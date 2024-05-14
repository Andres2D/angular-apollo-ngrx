import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Apollo, ApolloModule } from 'apollo-angular';
import { map } from 'rxjs';
import { GET_USER_PROFILE } from './graphql/queries';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ApolloModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'apollo-ngrx-template';

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {

    this.apollo.query<{ viewer: User }>({ query: GET_USER_PROFILE })
    .pipe(
      map(data => {
        return {
          login: data.data.viewer.login,
          bio: data.data.viewer.bio,
          avatarUrl: data.data.viewer.avatarUrl,
        }
      })
    )
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
