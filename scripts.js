const app = document.getElementById('project');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
var data = [];
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/dangthanhtri/hocmonprochure/main/data.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(id => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('onclick', 'projectDetail(this.id)');
      card.setAttribute('id', id.STT);
      const img = document.createElement('img');
      img.src = id.image;
      const h1 = document.createElement('h1');
      h1.textContent = id.tenduan;
      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(h1);
    });
  }
}

request.send();

function projectDetail(id) {
  $.each(data, function (key, val) {
    if ((val.STT) == id) {
      document.getElementById("tenduan").innerHTML = ('<i  class="fa fa-home" aria-hidden="true"></i> ' + val.tenduan);
      document.getElementById("loaiduan").innerHTML = ('<i class="fa fa-map" aria-hidden="true"></i> ' + "Loại dự án: " + val.loaiduan);
      document.getElementById("quymo").innerHTML = ('<i class="fa fa-arrows-alt" aria-hidden="true"></i> ' + "Quy mô: " + val.quymo);
      document.getElementById("chucnangquyhoach").innerHTML = ('<i class="fa fa-bullseye" aria-hidden="true"></i> ' + "Chức năng quy hoạch: " + val.chucnangquyhoach);
      document.getElementById("chitieuquyhoach").innerHTML = ('<i class="fa fa-line-chart" aria-hidden="true"></i> ' + "Chỉ tiêu quy hoạch: " + val.chitieuquyhoach);
      document.getElementById("hientrang").innerHTML = ('<i class="fa fa-file" aria-hidden="true"></i> ' + "Hiện trạng: " + val.hientrang);
      document.getElementById("imageProduct").src = val.image;
      document.getElementById("videoProduct").src = val.video;
    }
  });
  switchView('projectDetail');
}