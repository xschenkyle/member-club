import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  keyword = '';
  location = 'Ottawa';

  results: SearchResult[] = [];

  private searchSubject = new Subject<string>();

  constructor(private searchService: SearchService) {

    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(keyword =>
          this.searchService.search(keyword, this.location)
        )
      )
      .subscribe(results => {
        this.results = results;
      });
  }

  onSearchChange(): void {

    if (this.keyword.trim().length < 2) {
      this.results = [];
      return;
    }

    this.searchSubject.next(this.keyword);
  }

  clearResults(): void {
    setTimeout(() => {
      this.results = [];
    }, 200);
  }
}