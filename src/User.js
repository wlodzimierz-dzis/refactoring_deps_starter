module.exports = class User {
    friends = [];
    trips = [];

    addFriend(user) {
        this.friends.push(user);
    }

    addTrip(trip) {
        this.trips.push(trip);
    }

    getFriends() {
        return this.friends;
    }

    getTrips() {
        return this.trips;
    }

};