import React from "react";
import BoardCard from '@/components/Global/Cards/BoardCard'
const productWebp = '/assets/images/cake-product.webp';

const DATA_BOARD = [
  {
    title: 'Siswa Terbaik',
    desc: 'kami akan menjadikan siswa disini menjadi siswa yang mampu bersaing di dunia hafalan alquran',
    color: '#125C13'
  },
  {
    title: 'Guru Terbaik',
    desc: 'kami akan menjadikan siswa disini menjadi siswa yang mampu bersaing di dunia hafalan alquran',
    color: '#125C13'
  },
  {
    title: 'Fasilitas Lengkap',
    desc: 'kami akan menjadikan siswa disini menjadi siswa yang mampu bersaing di dunia hafalan alquran',
    color: '#acce22'
  },
  {
    title: 'Kurikulum Terbaik',
    desc: 'kami akan menjadikan siswa disini menjadi siswa yang mampu bersaing di dunia hafalan alquran',
    color: '#acce22'
  },
]
const Board = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="board container">
        <div className="board-content">
          {[DATA_BOARD[0], productWebp, DATA_BOARD[1], productWebp, productWebp, DATA_BOARD[2],productWebp, DATA_BOARD[3]].map((item, index) => (
            <BoardCard key={index} index ={index} item={item} />
          ))}
        </div>
    </div>
  );
};

export default Board;
