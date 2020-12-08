import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQCvZ8jlIx4RZypXSAwL_d22BOZ1Fwotb7Kyt7NOO_1a62ZKUM8u_mhp-sHkxrgF9BGeybExXxAPWeM8qXg'

    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    /* const headers = new HttpHeaders({

      'Authorization': 'Bearer BQBqMU4VLV0EkIj5Zt-BLrmiu41v0n_zcqsfdEXdmaWXc8-6MEznVDUXp60vXh-emSxn67ghBA8nroI17yo'

    }); */

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));

    /* return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map(data => data['albums'].items)); */

  }
  getArtistas(termino: string) {

    /* const headers = new HttpHeaders({

      'Authorization': 'Bearer BQBqMU4VLV0EkIj5Zt-BLrmiu41v0n_zcqsfdEXdmaWXc8-6MEznVDUXp60vXh-emSxn67ghBA8nroI17yo'

    }); */

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers }).pipe(map(data => data['artists'].items)); */
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`); /* .pipe(map(data => data['artists'].items)); */

  }

  getTopTrack(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks']));

  }
}
