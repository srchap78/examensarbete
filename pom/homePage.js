import {
    Selector
} from 'testcafe';

export default class HomePAGE {
    constructor() {
        this.logo = Selector("#header_logo > a > img")
        this.dresses = Selector("sf-with-ul").withText("Dresses")
        this.summerDresses = Selector(".subcategory-name").withText("Summer Dresses");
        this.summerDressesLogo = Selector(".cat-name").withText("Summer Dresses")
    }

}