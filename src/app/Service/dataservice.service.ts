import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  api_key = '563492ad6f917000010000011b7d01523ad14056988d43a71b820d28';

  constructor(private http: HttpClient) {}
  getBackgroundVideos() {
    let page: number = 1;
    page = Math.round(Math.random() * 8000 + 1);
    return this.http
      .get(
        `https://api.pexels.com/videos/search?query=nature&per_page=1&page=${page};`,
        {
          headers: new HttpHeaders().set('Authorization', this.api_key),
        }
      )
      .pipe(
        map((res: any) => {
          return {
            ...res.videos,
          };
        })
      );
  }

  getHoteldetails() {
    return this.http.get(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-09-30&checkout_date=2022-12-27&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=1708351&adults_number=1&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=25&amenity_ids=527%2C2063&guest_rating_min=4`,
      {
        headers: new HttpHeaders()
          .set(
            'X-RapidAPI-Key',
            'fb5afbde52mshbb75e78ffef2d76p107385jsnb6cc3293fd57'
          )
          .set('X-RapidAPI-Host', 'hotels-com-provider.p.rapidapi.com'),
      }
    );
  }
}
