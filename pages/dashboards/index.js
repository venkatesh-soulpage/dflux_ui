import React from "react";
import MainLayout from "layouts/MainLayout";
import { Row, Col, Button } from "react-bootstrap";

import DashboardCard from "components/dashboard/DashboardCard";
import DashboardNavbar from "components/dashboard/Navbar";

import CardDeck from "react-bootstrap/CardDeck";
import DataTable from "react-data-table-component";

import useSWR from "swr";
// api fetcher
import { APIFetcher } from "lib/service";

function Dashboard() {
  // const employees = APIFetcher("http://dummy.restapiexample.com/api/v1/employees");
  // console.log("emp", employees);
  const employees = [
    {
      id: "1",
      employee_name: "Tiger Nixon",
      employee_salary: "320800",
      employee_age: "61",
      profile_image: "",
    },
    {
      id: "2",
      employee_name: "Garrett Winters",
      employee_salary: "170750",
      employee_age: "63",
      profile_image: "",
    },
    {
      id: "3",
      employee_name: "Ashton Cox",
      employee_salary: "86000",
      employee_age: "66",
      profile_image: "",
    },
    {
      id: "4",
      employee_name: "Cedric Kelly",
      employee_salary: "433060",
      employee_age: "22",
      profile_image: "",
    },
    {
      id: "5",
      employee_name: "Airi Satou",
      employee_salary: "162700",
      employee_age: "33",
      profile_image: "",
    },
    {
      id: "6",
      employee_name: "Brielle Williamson",
      employee_salary: "372000",
      employee_age: "61",
      profile_image: "",
    },
    {
      id: "7",
      employee_name: "Herrod Chandler",
      employee_salary: "137500",
      employee_age: "59",
      profile_image: "",
    },
    {
      id: "8",
      employee_name: "Rhona Davidson",
      employee_salary: "327900",
      employee_age: "55",
      profile_image: "",
    },
    {
      id: "9",
      employee_name: "Colleen Hurst",
      employee_salary: "205500",
      employee_age: "39",
      profile_image: "",
    },
    {
      id: "10",
      employee_name: "Sonya Frost",
      employee_salary: "103600",
      employee_age: "23",
      profile_image: "",
    },
    {
      id: "11",
      employee_name: "Jena Gaines",
      employee_salary: "90560",
      employee_age: "30",
      profile_image: "",
    },
    {
      id: "12",
      employee_name: "Quinn Flynn",
      employee_salary: "342000",
      employee_age: "22",
      profile_image: "",
    },
    {
      id: "13",
      employee_name: "Charde Marshall",
      employee_salary: "470600",
      employee_age: "36",
      profile_image: "",
    },
    {
      id: "14",
      employee_name: "Haley Kennedy",
      employee_salary: "313500",
      employee_age: "43",
      profile_image: "",
    },
    {
      id: "15",
      employee_name: "Tatyana Fitzpatrick",
      employee_salary: "385750",
      employee_age: "19",
      profile_image: "",
    },
    {
      id: "16",
      employee_name: "Michael Silva",
      employee_salary: "198500",
      employee_age: "66",
      profile_image: "",
    },
    {
      id: "17",
      employee_name: "Paul Byrd",
      employee_salary: "725000",
      employee_age: "64",
      profile_image: "",
    },
    {
      id: "18",
      employee_name: "Gloria Little",
      employee_salary: "237500",
      employee_age: "59",
      profile_image: "",
    },
    {
      id: "19",
      employee_name: "Bradley Greer",
      employee_salary: "132000",
      employee_age: "41",
      profile_image: "",
    },
    {
      id: "20",
      employee_name: "Dai Rios",
      employee_salary: "217500",
      employee_age: "35",
      profile_image: "",
    },
  ];

  const columns = [
    {
      name: "Employee Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: "employee_name",
      sortable: true,
    },
    {
      name: "Employee Age",
      selector: "employee_age",
      sortable: true,
    },
    {
      name: "Employee Salary",
      selector: "employee_salary",
      sortable: true,
    },
    {
      name: "Profile Image",
      selector: "profile_image",
    },
  ];

  return (
    <div>
      <DashboardNavbar />

      <DataTable
        data={employees}
        columns={columns}
        fixedHeader
        fixedHeaderScrollHeight="700px"
        // noTableHead={true}
      />
    </div>
  );
}

Dashboard.Layout = MainLayout;

export default Dashboard;
