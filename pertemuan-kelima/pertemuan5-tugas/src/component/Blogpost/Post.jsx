import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="https://i.pinimg.com/originals/64/fa/8c/64fa8ca6a27c8d049c2f78d16a3f2877.jpg" alt="Gambar Tumbnail Artikel"/>
            </div>
            {/* <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-warning" onClick={props.hapusArtikel}>Hapus</button>
            </div> */}
            <div className="daftar-mahasiswa">
                <div className="nim-mahasiswa">{props.nim}</div>
                <div className="nama-mahasiswa">{props.nama}</div>
                <div className="alamat-mahasiswa">{props.alamat}</div>
                <div className="hp-mahasiswa">{props.hp}</div>
                <div className="angkatan-mahasiswa">{props.angkatan}</div>
                <p className="status-mahasiswa">{props.status}</p>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;