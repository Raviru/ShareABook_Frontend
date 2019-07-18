import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-u-catalogue',
  templateUrl: './u-catalogue.component.html',
  styleUrls: ['./u-catalogue.component.css']
})
export class UCatalogueComponent implements OnInit {
  public bookDetails$;
  itemTypes = ['Reference Book', 'Past Papers', 'Short Note', 'Personal Note'];

  constructor(
    private route: Router,
    private bookDetailsService: BookDetailsService
  ) {}

  onSubmit() {
    this.route.navigate(['/users/u-bookadd']);
  }

  delete() {
    if (confirm('Are you sure you want to delete this product?')) {
      //  this.bookDetailsService.method(this.bookDetails$.ISBN);
    }
  }

  ngOnInit() {
    this.bookDetails$ = this.bookDetailsService.getBookDetails();

  //   $(document).ready(function() {
  //     $('.filterable .btn-filter').click(function() {
  //       const $panel = $(this).parents('.filterable'),
  //         $filters = $panel.find('.filters input'),
  //         $tbody = $panel.find('.table tbody');
  //       if ($filters.prop('disabled') === true) {
  //         $filters.prop('disabled', false);
  //         $filters.first().focus();
  //       } else {
  //         $filters.val('').prop('disabled', true);
  //         $tbody.find('.no-result').remove();
  //         $tbody.find('tr').show();
  //       }
  //     });

  //     $('.filterable .filters input').keyup(function(e) {
  //       /* Ignore tab key */
  //       const code = e.keyCode || e.which;
  //       if (code === '9'){ return; }
  //       /* Useful DOM data and selectors */
  //       const $input = $(this),
  //         inputContent = $input.val().toLowerCase(),
  //         $panel = $input.parents('.filterable'),
  //         column = $panel.find('.filters th').index($input.parents('th')),
  //         $table = $panel.find('.table'),
  //         $rows = $table.find('tbody tr');
  //       /* Dirtiest filter function ever ;) */
  //       const $filteredRows = $rows.filter(function() {
  //         const value = $(this)
  //           .find('td')
  //           .eq(column)
  //           .text()
  //           .toLowerCase();
  //         return value.indexOf(inputContent) === -1;
  //       });
  //       /* Clean previous no-result if exist */
  //       $table.find('tbody .no-result').remove();
  //       /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
  //       $rows.show();
  //       $filteredRows.hide();
  //       /* Prepend no-result row if all rows are filtered */
  //       if ($filteredRows.length === $rows.length) {
  //         $table
  //           .find('tbody')
  //           .prepend(
  //             $(
  //               '<tr class="no-result text-center"><td colspan="' +
  //                 $table.find('.filters th').length +
  //                 '">No result found</td></tr>'
  //             )
  //           );
  //       }
  //     });
  //   });
   }
}
