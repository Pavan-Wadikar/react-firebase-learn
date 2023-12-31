import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      {topic}
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgNBw0HCA0HBwgHBw0HBwcHDQ8ICQcNFREWFhURExMYHSggGBoxGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NGCsZFRkrKzc3LTcrKy03Ny03LTctLSsrKy0rNysrLSsrKystKy0tKy0rKysrKystLS03KysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAADAQIEAAcGBf/EAB4QAQEBAQEBAQEAAwAAAAAAAAABAhIDERMhMUJR/8QAHAEAAwEBAQEBAQAAAAAAAAAAAQIDBAAFBwgG/8QAHBEAAwEBAQEBAQAAAAAAAAAAAAECAxMSEQQx/9oADAMBAAIRAxEAPwD8H10yel/vw/rQSfa/m4g+vwviL+eWnzyPzjT5wtondCeeWnzyPzjRiM1IyWxMRoxB4h8RnqTLbExD4g8Q2IjUmamJiGxB5hsRFwZ6YmYXMUzC5geCFMTMJmKZhcu8EKZfMJmKZJkfBJstIvIiLwfBJkyLyIi0HwTZMiZHRaG8Csj4n4lJlAv0j4j4t8cZQd9K/EfF0GUHfSlithLFbDqBkw7FbCWK2GUDJh/HLfEG8D/TxX1qvnHb/wAr+cev5+I+ifxD+cafOB840ecQqTNbG840YgcRoxEKkyWxcQ+ILEPhCpM1MXENgWTZScGehcw2BZNkngz0Jk2RZLl3ghQmS5HkmXcyNCZJB5JkfBJl4vFIvB8EmXi8Ui8HwTZaJiImG8CstHOSKgU5zkmUAIQlx1AStRVqrTKAlapV6pqnUDfSrkfXDzO9HiX+xvOCzP60ecek5Po9MbzjTiAxGjERqTLbGxD4Fg+EKky2Lg+A4NhJwZqGybIcmym4IUNkuRZLkOZnoXJciyTLuZGhskyLJMu8EWLkmRRfI8yTFi8HF4PgmxItBxeD4JsvFopKtDeBWWSrEioFLOR9d9N4AS5W1Fp1mL9JtVtRapdHWYronVHqutUtOswezvqR/XH5g9njXnGnzgPONGI1VJ9Otj4PgOD4RcmWxsHwHBsJuDNQ2DZDk2U3BnobJsgybJOZChslyHJcu5kKGyTIc0uaHgjSGyTNDmkzR5kqQuaSUOaSV3gk0LKvKKVeUeZNoWVaUcq0o+CbQkq0o5U9G5iMX676Lp3RlmTbF6R0PpHR1mSdCXSt0O7VuzrMm6Eulbod2pdqLMR0JdKWqXSl2dZiui/ThdoNzF9HlGI0YDg+DuT6tY2D4Bg+E3BmobBshybJHBnobJchyXJPBCh8lyDJc0PBCh80maHNJmh4I0h80maDNJmu5kmh81fNDmkld4JNDSryhmkzY8yNGiVeaZ5tM2PMjVGmaT0zzSezLIjVGjpPTP2nsyzI1Q/Tugdo7OsyLoe7Vuw9ou1FkSdC3at2K7VujrMR0Ldq3YrtW7UWZN0JdK3YrpW7OsxHQvTmftxuQnRHnODYFg2EnJ9eobBshwbJXBnobJchyXJfBChslyHNLkvghQ2aXNBmkzQ5kaQ+aTNDmkzXcyTQ2aTNBKvNO5kaQ8q3bN27sVkZtL+GntabZZtabPyMlWaptabZZtabHkQqjTNrdss2t2ZZkao09u7Z+3dmWZGqNHaOwdu7OsyTobtF2HtHZ1mTdDXat2LpF0dZknQl0rdDulLtRZk6v4Ldj1sd2pdHWZmvUTtwLpx+ZHqfFYLgWTZY/J9uoXJciyXIeCFC5LkWSZDwRobNJmhyTNDwRobNJmhzSShzJNDZpJWfp3Y8zPdJGntH6M19EX0OsjDrqab6Jm2TtabOsjBen01za02yTa02PIjVmubW7ZJtabHkRdGqbT2zTaezcyNUae09s3aexWZKqNHbu2ftPZ1mSdD9I6D27oyzIuhekXQulbo6zI1p8Fu1Lod0rdHWZlvUvdKXSl0rdKKDLepfpwenG5keh8vkuRZLl5/g+/ULkmRZLl3gjQuSZFkmaPgkxc0maCaW7dzIU0h5pPbN2j9BWRk01NP6IvozX0VvoosTz9djTfRH6Mt9HTaixPN01+mubWm2WbWmx5Gd2a5tabZJtabHkTdmubTNsk2t27kSdGvtM2yza02PMlVGrtPbLNrTY8yNUae09s02tNjzI1Q/Tugdu7HwQvQa7R0LpHR1BjvQS6VulOkXRlBlvQtdK3Stqtp1BmrQnpyn1BvJLofg5JkcXlecoP0XTFySUE0t2ZZkKtI0TSe2ft3aiyMumpo7d2zdovodYmHTY0/orfRmvorfRRYnna7mm+il9GW+qP0UWJ5uu301Ta02yza02bkZXZrm1ptkm1psORN2a5tabZJtM2PMR2a56Ldsnae3cybo1za82xza827mSqjXNrTbLNrTYcyNUaptPbNNpm3eDPehp7d0CbT0Pgx3oP07oPSeh8GS9BPrvo/qfo+TLdlvqtqPqLRUkKs76lT643wn7PwZpM0z9J7ZFmfom9jT27tn7d2rORk02NHbu2b9EX0XnEwabmi+it9Ge+g76KLE8/X9Bpvopr1Zteqn6KrE8zX9Bq/RM2yza02bkZHoaptabZZtM2HIR2a5tabZJtM27kK7Nc2tPRkm0zbuYjs1za36Mk9EzYcxHRsm15tinoTPoDzJ1Zsm15tjm15sOZmvQ1za02yza82XwZbs0zS00zzS80HgyXY80tNBmlpQ8mW6FlT9HKt9D4Zqosi1CfjvhB0R/XJ+OH4L9Pk5tPbP2jsZyPvWm5o7d2zX0RfRonIxafoNF9Fb6M19FNejROJ52v6DTfUevVm16jvossTzdf0mq+jptmm09m5GN6mqbT2yza3buQvQ1TaZtlm0z0DkK9DXNpm2WbT+gchehrm0/oyTaew5CuzX+iZ6Mn6J/R3MV2bM+hM7Yc+hc7K8yVWbc7JnbFnZc7TeZmqjXnZM6ZM7JnRHBnqjXnS+dM2dkzsjkzXRpmiSs2dEzU3Jmuh5r/i8DmlyRozUJFviuSQjJMr8St8QAPp5/dou0uehEo+z6Wyl2rfRzmqJRg1tlL6D16Oc1RKPL20oO+jptzlfKMTpkzaZtzg+IX6ye09ucHxC/WW7d3XOD4gfWT3U9ucHxA+smbT3XOd8Qv1kzdT3XOD4gfWWzulzuucSkidC53S51XOSpIhQudUua5yLRChc0ua5yVEKGzS5rnJMhQuaXNS5JkaEzS5c5FkKL/HOcUmf/9k="
          alt="Gradient"
        />
        <Avatar className="sidebar-avatar" />
        <h2>Pavan Wadikar</h2>
        <h4>pavanwadikar@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who Viewed You</p>
          <p className="sidebar-statNumber">777</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">777</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Design")}
        {recentItem("Development")}
      </div>
    </div>
  );
}

export default Sidebar;
