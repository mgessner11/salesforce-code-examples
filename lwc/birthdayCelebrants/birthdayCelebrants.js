import { LightningElement, api, wire } from "lwc";
import getBirthdayCelebrants from "@salesforce/apex/demoLightningWebComponent.getBirthdayCelebrants";
import staticDemoLWC from "@salesforce/resourceUrl/demoLWC";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class BirthdayCelebrants extends LightningElement {
  @api recordId;
  @wire(getBirthdayCelebrants, { accountId: "$recordId" }) contacts;

  imgHappyBirthday = staticDemoLWC + "/demoLWC/images/HappyBirthday.png";

  renderedCallback() {
    Promise.all([
      loadStyle(this, staticDemoLWC + "/demoLWC/css/styles.css"),
      loadScript(this, staticDemoLWC + "/demoLWC/js/script.js")
    ]).then(() => {
      //callback
    });
  }
}
