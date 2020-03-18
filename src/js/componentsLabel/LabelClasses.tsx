// /////////
//  LABEL
// /////////

export default class Label { 
    rating: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'
    categories: Category[] = new Array();
    getTag = () => {
        // render labelContainer
    }
    constructor(_categories: Array<Category>) { 
        this.categories = _categories; 
    }
}

// /////////
//  CATEGORY
// /////////

export class Category {
    categoryName: String
    sections: Section[] = new Array();
    getTag = (_index:String) => {
        // return (
        //     <div index={_index}>
               
        //     </div>    
        // )
    }
    getChildren = () => {
        var result: any = new Array()
        this.sections.forEach(function(element, index) {
            result.push(element.getTag(""+index))
        })
        return result
    }
    constructor(_categoryName: String, _sections: Array<Section>) { 
        this.categoryName = _categoryName; 
        this.sections = _sections; 
    }
}

// /////////
//  SECTION
// /////////
export class Section {
    sectionName: String;
    getTag = (_index:String) => {
        // return(
        //     <div>hi</div>
        // )
    }
    constructor(_sectionName: String) { 
        this.sectionName = _sectionName; 
    }
}