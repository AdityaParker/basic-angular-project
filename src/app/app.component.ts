import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myNumber: number;
  data: string[] = [
    "The FormControl instance tracks the value, user interaction, and validation status of the control and keeps the view synced with the model. If used within a parent form, the directive also registers itself with the form as a child control.",

    "It accepts a domain model as an optional Input. If you have a one-way binding to ngModel with [] syntax, changing the domain model's value in the component class sets the value in the view. If you have a two-way binding with [()] syntax (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to the domain model in your class",

    "To inspect the properties of the associated FormControl (like the validity state), export the directive into a local template variable using ngModel as the key (ex: #myVar='ngModel'). You can then access the control using the directive's control property. However, the most commonly used properties (like valid and dirty) also exist on the control for direct access. See a full list of properties directly available in AbstractControlDirective.",

    "The FormControl instance tracks the value, user interaction, and validation status of the control and keeps the view synced with the model. If used within a parent form, the directive also registers itself with the form as a child control.",

    "It accepts a domain model as an optional Input. If you have a one-way binding to ngModel with [] syntax, changing the domain model's value in the component class sets the value in the view. If you have a two-way binding with [()] syntax (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to the domain model in your class",

    "To inspect the properties of the associated FormControl (like the validity state), export the directive into a local template variable using ngModel as the key (ex: #myVar='ngModel'). You can then access the control using the directive's control property. However, the most commonly used properties (like valid and dirty) also exist on the control for direct access. See a full list of properties directly available in AbstractControlDirective.",
    "The FormControl instance tracks the value, user interaction, and validation status of the control and keeps the view synced with the model. If used within a parent form, the directive also registers itself with the form as a child control.",

    "It accepts a domain model as an optional Input. If you have a one-way binding to ngModel with [] syntax, changing the domain model's value in the component class sets the value in the view. If you have a two-way binding with [()] syntax (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to the domain model in your class",

    "To inspect the properties of the associated FormControl (like the validity state), export the directive into a local template variable using ngModel as the key (ex: #myVar='ngModel'). You can then access the control using the directive's control property. However, the most commonly used properties (like valid and dirty) also exist on the control for direct access. See a full list of properties directly available in AbstractControlDirective."
  ];

  handleClick() {
    console.log("inside the handle click " + this.myNumber);
  }
}
