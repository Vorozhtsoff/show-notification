self.addEventListener('sync', e => {
    if (e.tag == 'syncdata') {
        fetch('/data.json', { method: 'post'}).then(
            (req) => {
                if (req.status === 200) {
                    self.registration.showNotification('Data sync');
                }
            }
        );
    }
});