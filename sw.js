self.addEventListener('sync', e => {
    if (e.tag == 'syncdata') {
        fetch('data.json', { method: 'get'}).then(
            (req) => {
                if (req.status === 200) {
                    self.registration.showNotification('Data sync');
                }
            }
        );
    }
});