export class Songs
{
    id:string;
    artist:string;
    track:string;
    listened:boolean;
    favourite:boolean;

    constructor(id,artist, track, listened, favourite)
    {
        this.id = id;
        this.artist = artist;
        this.track = track;
        this.listened = listened;
        this.favourite = favourite;
    }
}