import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  searchText: string = '';
  filteredData: any[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().then((response) => {
      this.data = response.data;
      this.filteredData = this.data; 
    }).catch((error) => {
      console.error('Error fetching data', error);
    });
  }

  // Function to filter data based on the search text
  filterData(): void {
    this.filteredData = this.data.filter(item => {
      return item.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
             item.email.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
