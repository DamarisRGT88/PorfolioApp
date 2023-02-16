import { Component, OnInit } from '@angular/core';
// import Typewriter from 't-writer.js'


@Component({
  selector: 'app-aboute-me',
  templateUrl: './aboute-me.component.html',
  styleUrls: ['./aboute-me.component.css']
})
export class AbouteMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //     const target = document.querySelector('.tw');
    //     const writer = new Typewriter(target, {
    //       loop: true,
    //       typeSpeed: 80,
    //       deleteSpeed: 80,
    //       typeColor: 'red'
    //     })

    //     writer
    //       .type('You can type')
    //       .rest(500)
    //       .changeOps({ deleteSpeed: 80 })
    //       .remove(4)
    //       .type('edit')
    //       .rest(500)
    //       .remove(4)
    //       .type('synchronize callbacks')
    //       .rest(500)
    //       .changeOps({ deleteSpeed: 20 })
    //       .remove(21)
    //       .type('change options on the go')
    //       .rest(500)
    //       .clear()
    //       .start()

  }

}
