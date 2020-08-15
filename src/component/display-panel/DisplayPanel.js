import React from 'react'

function DisplayPanel() {
    return (
        <div class="panel panel-right">  
                <h3>Team 1</h3>
                <hr/>
                <div class="fl-container card-items">

                    <div class="card card-create-user">
                        <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Name</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Description</label>
                              <textarea name="description" class="form-control" id="exampleInputPassword1" cols="30" rows="5"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-warning col-12">Create User  +</button>
                            </div>
                          </form>
                    </div>
    
                    <div class="card card-delete-user">
    
                        <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Name</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User 1" disabled/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Description</label>
                              <textarea name="description" class="form-control" id="exampleInputPassword1" cols="10" rows="4" disabled>Some description here. Some description here. Some description here. Somme description here.</textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-danger col-12">Delete User  -</button>
                            </div>
                          </form>
                    </div>

                    <div class="card card-delete-user">
    
                        <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Name</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User 2" disabled/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Description</label>
                              <textarea name="description" class="form-control" id="exampleInputPassword1" cols="20" rows="5" disabled>Some description here. Some description here. Some description here. Somme description here.</textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-danger col-12">Delete User  -</button>
                            </div>
                          </form>
                    </div>

                    <div class="card card-delete-user">
    
                        <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Name</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User 3" disabled/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Description</label>
                              <textarea name="description" class="form-control" id="exampleInputPassword1" cols="25" rows="6" disabled>Some description here. Some description here. Some description here. Some description here. Some description here.</textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-danger col-12">Delete User  -</button>
                            </div>
                          </form>
                    </div>

                </div>
                


            </div>
    )
}

export default DisplayPanel;
