import { decorate, observable } from "mobx";
import { MenuList } from "@material-ui/core";

class NavigatorItems{
    static HOME="HOME"
    static DEV="DEV"
}

/**
 * Designed to handle the nagivation logic of the project 
 */
class NavigationService{
    
    menus = [NavigatorItems.HOME, NavigatorItems.DEV]
    selected = NavigatorItems.HOME
    customSelected = false;

    isSelected(menu: string){
        return this.selected == menu;
    }

    /**
     * 
     * When the menu is one of the designated this.menus,
     * we display it in the navigator.
     * 
     * If thats not the case, then we display it only when that 
     * page is loaded. Once we are done with that page,
     * we will then remove that menu item. Eg: Product is not displayed by 
     * default, but is only shown then product/{id} is rendered.  
     * 
     * @param menu Menu that is currently selected 
     */
    setSelected(menu: string){
        
        if(!this.containsMenu(menu)){
            // this is a custom menu 
            this.customSelected = true; 
            //add to the list of menus to display 
            this.menus.push(menu.toUpperCase())
        }else {
            //when menu transitions from custom to menuItems
            if(this.customSelected) this.menus.pop();

            this.customSelected = false;
        }

        this.selected = menu.toUpperCase();
    }

    containsMenu(menu: string){
        return this.menus.indexOf(menu) > -1;
     }

    /**
     * 
     * @param menu What page this should map to 
     */
    resolveLink(menu: string){
        switch(menu){
            case NavigatorItems.HOME: return "/"
            case NavigatorItems.DEV: return "/dev"
        }
        return "/";
    }
}

decorate(NavigationService, {
    selected: observable
})

const navigationService = new NavigationService();
export default navigationService;