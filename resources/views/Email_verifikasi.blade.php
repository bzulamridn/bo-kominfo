<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>Halo {{$nama}},</p>
    <br>
    <p>Permintaan anda tentang peminjaman ruangan TCM Room untuk:</p>
    <table>
        <tbody>
            <tr>
                <td>Nama Kegiatan</td>
                <td>:</td>
                <td>{{ $nama_kegiatan }}</td>
            </tr>
            <tr>
                <td>Nama Kegiatan</td>
                <td>:</td>
                <td>{{ $tanggal_mulai }} sampai dengan {{ $tanggal_selesai }}</td>
            </tr>
        </tbody>
    </table>
    @if($status == '1')
    <p>Dengan melihat jadwal yang ada maka permintaan anda kami <span><b> Setujui </b></span></p>
    <p>Silahkan menyerakhan surat pengantar anda kepada operator kami paling lambat 1 hari sebalum acara, dan pastikan anda sudah membaca Syarat dan Ketentuan pada TCM Room </p>
    <br></br>
    <p>Terima Kasih</p>
    @else
    <p>Dengan melihat jadwal yang ada maka permintaan anda <span><b> Tidak Disetujui </b></span> dengan alasan <span><b>"{{ $catatan_op }}"</b></span></p>
    <p>Silahkan jadwalkan kembali kegiatan anda</p>
    <br></br>
    <p>Terima Kasih</p>
    @endif
    <br></br>
    <p>Support by Team e-Gov @ Bidang e-Goverment Dinas Komunikasi dan Informatika Kota Singkawang</p>
</body>

</html>

