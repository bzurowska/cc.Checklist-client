import Project from './Project';
class SideBar {
    constructor(elementId) {
        this.element = document.createElement('section');
        this.element.id = elementId;
    }

    render(){
        document.querySelector('#root').appendChild(this.element);
        this.element.innerHTML = `
          <div class="accordion" id="accordionExample">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-success" type="button" id="button-addon1">Add</button>
          </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
          </div>
        `;
        
        let projectTitle = document.querySelector('.form-control').getAttribute('value');
        const addProjectButton = document.getElementById('button-addon1');
        addProjectButton.addEventListener('click', (project) => {
          project = new Project(projectTitle);
          project.render();
          console.log('click');
        }, false);
    }
   
}
 export default SideBar;