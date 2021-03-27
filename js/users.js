class Users {
    constructor(data = [], wrap) {
        this.data = data;
        this.wrap = wrap;
        this._init();
        console.log(wrap)
        
    }
    _init () {
        this._render()
    }
    _templatePost({ name, email, phone, website }){
        const template = `
            <div class="card m-3 bg-info bg-gradient" style="width: 300px;">
                <div class="card-body">
                    <h5 class="card-title text-white text-center">${name}</h5>
                    <p class="card-text text-body">${email}</p>
                    <p class="text-secondary">${phone}</p>
                    <p class="text-body">${website}</p>

                </div>
            </div>    
        `
        return template
    }
    _templatePosts () {
        let template = ''

        this.data.forEach((item) => {
            template = template + this._templatePost(item)
        })
        return template
    }
    _render() {
        if (this.wrap) {
           this.wrap.innerHTML = this._templatePosts() 
        }   
    }
}

export { Users }