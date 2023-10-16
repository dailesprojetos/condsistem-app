import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'condsistem-app';

  ngAfterViewInit(): void {
    (function ($) {
      'use strict';

      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function (this:any) {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      $('#sidebarToggle').on('click', function (e:any) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
