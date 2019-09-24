<?php
echo "This works";
try {
    require("credentials.php");
    //Get variables from Post Method
    $fname = $_GET["txtFirst"];
    $lname = $_GET["txtLast"];
    $cmType = $_GET["txtType"];
    $comment = $_GET["txtComment"];

    $sql = "INSERT INTO MC_COMMENTS(CM_ID, CM_FNAME, CM_LNAME, CM_TYPE, CM_COMMENT) VALUES (DEFAULT, ?, ?, ?, ?)";

    //Create connection to database
    $con = mysqli_connect($host, $dbuser, $dbpass, $database);

    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    // prepare and bind
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ssss", $fname, $lname, $cmType, $comment);

    //execute query
    $stmt->execute();

    //select rows
    $sql2 = "SELECT * FROM MC_COMMENTS";
    //$stmt = $con->prepare($sql2);
    //$stmt->execute();

    $rs = mysqli_query($con, $sql2);
    //$rs = $stmt->get_result();
    echo "<h3>Today's Comments</h3>";
    if (mysqli_num_rows($rs) > 0) {
        while ($row = mysqli_fetch_assoc($rs)) {
            if ($row["CM_FNAME"] != "") {

                ?>
                <?= $row["CM_FNAME"] . " " . $row["CM_LNAME"] . " posted: " ?> <br/>
                <?= $row["CM_COMMENT"] ?> <br/>
                <h3>Comment Type: </h3> <br/>
                <?= $row["CM_TYPE"] ?> <br/>
                <hr/>
                <?php
            }
        }
    }

    //close connection to database
    mysqli_close($con);
}
catch (Exception $err){
    echo $err;
}