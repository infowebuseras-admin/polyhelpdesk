fetch('data/notifications.json')
  .then(res => res.json())
  .then(data => {
    let list = document.getElementById('notif-list');
    list.innerHTML = "";
    data.forEach(item => {
      list.innerHTML += `<p><b>${item.title}</b> - ${item.date}</p>`;
    });
  });

fetch('data/documents.json')
  .then(res => res.json())
  .then(data => {
    let list = document.getElementById('doc-list');
    list.innerHTML = "";
    data.forEach(doc => {
      list.innerHTML += `<p><a href="${doc.file}" target="_blank">${doc.title}</a></p>`;
    });
  });
