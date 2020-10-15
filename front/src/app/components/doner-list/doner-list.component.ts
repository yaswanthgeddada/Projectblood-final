import { Component, OnInit } from '@angular/core';
import { DonorListService } from 'src/app/services/donor-list.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';//model importer
import { TemplateRef } from '@angular/core';//model importer

@Component({
  selector: 'app-doner-list',
  templateUrl: './doner-list.component.html',
  styleUrls: ['./doner-list.component.scss']
})
export class DonerListComponent implements OnInit {
  modalRef: BsModalRef;//model importer
  donors:any = [];
  Bloodonors:any = [];
  name= '';
  email='';
  mobile='';
  group='';
  address=''
  donator = null;
  searchList :any=[];
  searchValue: any;

  ngOnInit() {
    this.getData()
    console.log()
  }
  constructor(private donorList:DonorListService,
    private modalService: BsModalService,
    ){}

  

  getData() {

    this.donorList.getDonors().subscribe(result => {
     console.log("result",result)
      this.donors = []
      this.donors = result;
      // console.log(this.donors)
      //console.log("Details are", this.projectDetails)
      this.Bloodonors = []
      this.donors.forEach(element => {
        this.Bloodonors.unshift(element);

      });
      console.log("Donors - List",this.Bloodonors)
      
    });
    this.donors = [];
  }

  addDonor() {
    var newUser = {
      "dName": this.name,
      "dEmail": this.email,
      "dMobile": this.mobile,
      "bGroup": this.group,
      "dAddress":this.address,
    }
   
    
    this.donorList.addDonor(newUser).subscribe(result => {
      
        this.donator=result;
        console.log("candidate details are :",this.donator)
        this.getData();
    })
  }

  gerSearch(){
    this.Bloodonors =[]
    this.donorList.getSearch(this.searchValue).subscribe(data => {
      this.Bloodonors = data;
      console.log("search details are", this.Bloodonors)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
    }
  }


