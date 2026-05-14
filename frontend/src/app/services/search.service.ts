import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // Google Custom Search API
  // Create your API key from Google Cloud Console
  // Create your Search Engine ID (cx)

  private apiKey = 'YOUR_GOOGLE_API_KEY';
  private searchEngineId = '07d99ebc47c1d4b87';
  //https://cse.google.com/cse?cx=07d99ebc47c1d4b87

  private googleApiUrl = 'https://www.googleapis.com/customsearch/v1';

  constructor(private http: HttpClient) {}

  search(keyword: string, location: string): Observable<SearchResult[]> {

    const query = `badminton ${keyword} near ${location}`;

    return this.http
      .get<any>(
        `${this.googleApiUrl}` +
        `?key=${this.apiKey}` +
        `&cx=${this.searchEngineId}` +
        `&q=${encodeURIComponent(query)}` +
        `&num=10`
      )
      .pipe(
        map(response => {

          if (!response.items) {
            return [];
          }

          return response.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet
          })) as SearchResult[];
        })
      );
  }
}